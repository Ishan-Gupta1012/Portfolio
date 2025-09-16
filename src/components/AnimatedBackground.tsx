export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-40 animate-grid-pan"></div>
    </div>
  );
}
