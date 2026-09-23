import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "./ui/button";

/**
 * The last line before a white screen.
 *
 * Owns: catching a render-time throw below it, and offering the two moves that
 * actually recover — reload (the fix for a chunk that 404'd after a redeploy,
 * which is the likeliest cause here: five routes are `lazy()`) and go somewhere
 * else (the fix for one broken page).
 *
 * Owns NOT: fetch failures and anything async. React error boundaries cannot
 * see those; the pages that fetch carry their own failed state.
 *
 * Sits INSIDE Layout on purpose. A boundary around the whole app would take the
 * nav down with the page, and then the only way out is the browser's back
 * button. With the chrome alive, a broken route is one click from a working one.
 *
 * `resetKey` is the pathname: navigating away clears the error, because the
 * error belonged to the route you left. Without it the fallback would outlive
 * its cause and every later route would render it.
 */
export class ErrorBoundary extends Component<
  { children: ReactNode; resetKey: string },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidUpdate(prev: { resetKey: string }) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // No reporting endpoint — this app is local-first and there is nowhere to
    // send it. The console is where the stack is useful, and it keeps the
    // component stack that the throw alone does not carry.
    console.error("Render failed:", error, info.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="max-w-prose py-12">
        <h1 className="text-h1 font-semibold text-text">This page stopped rendering.</h1>
        <p className="mt-2 text-small text-subtext0">
          Your progress is untouched — it lives in this browser, not in the page that broke. Reloading
          fixes it if the app updated while the tab was open.
        </p>
        <p className="mt-2 font-mono text-micro text-overlay1">{this.state.error.message}</p>
        <div className="mt-6 flex gap-2">
          <Button variant="primary" onClick={() => window.location.reload()}>
            Reload
          </Button>
          <Button variant="ghost" onClick={() => this.setState({ error: null })}>
            Try this page again
          </Button>
        </div>
      </div>
    );
  }
}
