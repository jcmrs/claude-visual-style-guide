import { useState } from "react";
import { StyleGuideHeader } from "./components/StyleGuideHeader";
import { TypographySection } from "./components/TypographySection";
import { ColorPaletteSection } from "./components/ColorPaletteSection";
import { ButtonsSection } from "./components/ButtonsSection";
import { FormsSection } from "./components/FormsSection";
import { NavigationSection } from "./components/NavigationSection";
import { CardsSection } from "./components/CardsSection";
import { DataDisplaySection } from "./components/DataDisplaySection";
import { FeedbackSection } from "./components/FeedbackSection";
import { StatusIndicatorsSection } from "./components/StatusIndicatorsSection";
import { LayoutSection } from "./components/LayoutSection";
import { ClaudeReferenceSection } from "./components/ClaudeReferenceSection";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-background transition-colors duration-200 ${isDark ? 'dark' : ''}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/80 backdrop-blur-sm border-border/50"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Style Guide Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <StyleGuideHeader />
        
        <div className="space-y-16 mt-12">
          <ClaudeReferenceSection />
          <TypographySection />
          <ColorPaletteSection />
          <ButtonsSection />
          <FormsSection />
          <NavigationSection />
          <CardsSection />
          <DataDisplaySection />
          <FeedbackSection />
          <StatusIndicatorsSection />
          <LayoutSection />
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-border/30">
          <div className="text-center text-muted-foreground">
            <p>Visual Style Guide • Inspired by Anthropic & Claude.AI Design</p>
            <p className="mt-2 text-sm">
              Use this guide to maintain consistent UI patterns across all artifacts
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}