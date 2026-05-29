import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Check, Circle, ListTodo, Sun, Star } from 'lucide-react';
import clsx from 'clsx';

type Priority = 'low' | 'medium' | 'high';
type Filter = 'all' | 'active' | 'completed';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
}

const STORAGE_KEY = 'todo-app-tasks';

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Todo[]) : [];
  } catch {
    return [];
  }
}

function saveTodos(todos: Todo[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

const PRIORITY_STYLES: Record<Priority, { dot: string; badge: string; label: string }> = {
  low:    { dot: 'bg-emerald-400',  badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',  label: 'Low' },
  medium: { dot: 'bg-amber-400',    badge: 'bg-amber-400/10 text-amber-400 border-amber-400/30',        label: 'Medium' },
  high:   { dot: 'bg-rose-400',     badge: 'bg-rose-400/10 text-rose-400 border-rose-400/30',           label: 'High' },
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [input, setInput] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [filter, setFilter] = useState<Filter>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  useEffect(() => {
    if (editingId && editRef.current) {
      editRef.current.focus();
    }
  }, [editingId]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      priority,
      createdAt: Date.now(),
    };
    setTodos(prev => [newTodo, ...prev]);
    setInput('');
    inputRef.current?.focus();
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const commitEdit = (id: string) => {
    const text = editText.trim();
    if (text) {
      setTodos(prev => prev.map(t => (t.id === id ? { ...t, text } : t)));
    }
    setEditingId(null);
    setEditText('');
  };

  const filtered = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const progress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="w-full max-w-xl mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-brand-600/20 border border-brand-600/30">
            <ListTodo className="w-6 h-6 text-brand-400" />
          </div>
          <h1 className="text-3xl font-bold gradient-text">My Tasks</h1>
        </div>
        <p className="text-slate-400 text-sm">
          {activeCount === 0 && totalCount > 0
            ? '🎉 All tasks completed!'
            : activeCount === 0
            ? 'No tasks yet. Add one below!'
            : `${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
        </p>

        {/* Progress bar */}
        {totalCount > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{completedCount} done</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="w-full max-w-xl mb-6">
        <div className="glow-card rounded-2xl p-4 flex flex-col gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && addTodo()}
            className="bg-transparent text-slate-100 placeholder-slate-500 text-base outline-none w-full"
          />
          <div className="flex items-center justify-between">
            {/* Priority selector */}
            <div className="flex gap-2">
              {(['low', 'medium', 'high'] as Priority[]).map(p => (
                <button
                  key={p}
                  onClick={() => setPriority(p)}
                  className={clsx(
                    'px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-200',
                    priority === p
                      ? PRIORITY_STYLES[p].badge + ' scale-105'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                  )}
                >
                  {PRIORITY_STYLES[p].label}
                </button>
              ))}
            </div>
            <button
              onClick={addTodo}
              disabled={!input.trim()}
              className="btn-primary flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="w-full max-w-xl mb-4">
        <div className="flex gap-1 p-1 bg-white/5 rounded-xl">
          {(['all', 'active', 'completed'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={clsx(
                'flex-1 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-200',
                filter === f
                  ? 'bg-brand-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              )}
            >
              {f}
              {f === 'all' && totalCount > 0 && (
                <span className="ml-1.5 text-xs opacity-70">({totalCount})</span>
              )}
              {f === 'active' && activeCount > 0 && (
                <span className="ml-1.5 text-xs opacity-70">({activeCount})</span>
              )}
              {f === 'completed' && completedCount > 0 && (
                <span className="ml-1.5 text-xs opacity-70">({completedCount})</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Todo list */}
      <div className="w-full max-w-xl flex flex-col gap-2">
        {filtered.length === 0 ? (
          <div className="text-center py-16 flex flex-col items-center gap-3">
            {filter === 'completed' ? (
              <>
                <Star className="w-10 h-10 text-slate-700" />
                <p className="text-slate-500">No completed tasks yet</p>
              </>
            ) : filter === 'active' ? (
              <>
                <Sun className="w-10 h-10 text-slate-700" />
                <p className="text-slate-500">No active tasks — you're all caught up!</p>
              </>
            ) : (
              <>
                <ListTodo className="w-10 h-10 text-slate-700" />
                <p className="text-slate-500">Add your first task above</p>
              </>
            )}
          </div>
        ) : (
          filtered.map(todo => (
            <div
              key={todo.id}
              className={clsx(
                'group glow-card rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-200',
                todo.completed && 'opacity-50'
              )}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleTodo(todo.id)}
                className={clsx(
                  'shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200',
                  todo.completed
                    ? 'bg-brand-600 border-brand-600'
                    : 'border-slate-600 hover:border-brand-500'
                )}
                aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
              >
                {todo.completed ? (
                  <Check className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-transparent" />
                )}
              </button>

              {/* Text / Edit */}
              <div className="flex-1 min-w-0">
                {editingId === todo.id ? (
                  <input
                    ref={editRef}
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') commitEdit(todo.id);
                      if (e.key === 'Escape') setEditingId(null);
                    }}
                    onBlur={() => commitEdit(todo.id)}
                    className="bg-transparent text-slate-100 outline-none w-full text-sm"
                  />
                ) : (
                  <p
                    onDoubleClick={() => !todo.completed && startEdit(todo)}
                    className={clsx(
                      'text-sm truncate cursor-default select-none',
                      todo.completed ? 'line-through text-slate-500' : 'text-slate-200'
                    )}
                    title={todo.text}
                  >
                    {todo.text}
                  </p>
                )}
              </div>

              {/* Priority dot */}
              <span
                className={clsx(
                  'shrink-0 w-2 h-2 rounded-full',
                  PRIORITY_STYLES[todo.priority].dot
                )}
                title={`Priority: ${PRIORITY_STYLES[todo.priority].label}`}
              />

              {/* Delete button */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="shrink-0 opacity-0 group-hover:opacity-100 p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-400/10 transition-all duration-200"
                aria-label="Delete task"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer actions */}
      {completedCount > 0 && (
        <div className="w-full max-w-xl mt-4 flex justify-end">
          <button
            onClick={clearCompleted}
            className="text-xs text-slate-500 hover:text-rose-400 transition-colors duration-200"
          >
            Clear completed ({completedCount})
          </button>
        </div>
      )}

      <p className="mt-12 text-xs text-slate-600">Double-click a task to edit it</p>
    </div>
  );
}
