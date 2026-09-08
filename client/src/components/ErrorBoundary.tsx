import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError(): State { return { hasError: true }; }

  render() {
    if (!this.state.hasError) return this.props.children;
    return <main className="grid min-h-screen place-items-center bg-[color:var(--paper)] p-6 text-[color:var(--ink)]"><div className="max-w-xl border border-[color:var(--line)] bg-white/50 p-9 text-center"><AlertTriangle className="mx-auto size-9 text-[color:var(--amber-dark)]" /><h1 className="mt-5 font-display text-4xl font-semibold">Não foi possível exibir esta página.</h1><p className="mt-4 leading-7 text-[color:var(--ink-soft)]">Atualize o navegador para tentar novamente.</p><button type="button" onClick={() => window.location.reload()} className="button-primary mt-7"><RotateCcw className="size-4" /> Atualizar página</button></div></main>;
  }
}
