/**
 * Route transition. `template` re-mounts on every navigation, so the CSS
 * entrance replays per page without shipping JS or delaying first paint.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
