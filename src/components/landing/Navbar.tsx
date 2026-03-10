import { useState } from "react";
import { Wallet, Menu, X } from "lucide-react";

const links = ["Features", "Markets", "Security", "Staking", "Governance"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
            <span className="text-xs font-bold text-background">C3</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">CryptoVault</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>

        <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold text-background hover:opacity-90 transition-opacity">
          <Wallet className="w-4 h-4" /> Connect Wallet
        </button>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 border-t border-border pt-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold text-background w-fit">
            <Wallet className="w-4 h-4" /> Connect Wallet
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
