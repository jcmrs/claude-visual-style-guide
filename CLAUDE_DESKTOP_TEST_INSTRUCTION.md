# Claude Desktop Test Instruction

## Purpose
Use this instruction with Claude Desktop (after applying the CLAUDE_DESKTOP_CUSTOM_INSTRUCTIONS.md) to generate a comprehensive test artifact that validates all design system components and patterns.

## Test Instruction for Claude Desktop

**Copy and paste this instruction to Claude Desktop:**

---

Please create a comprehensive Visual Style Guide test artifact that demonstrates all the design system components and patterns. The artifact should be a single HTML file that showcases:

**Essential Components to Include:**
1. **Typography Section** - All heading levels (h1-h6), paragraphs, different text sizes
2. **Color Palette** - Background, foreground, primary, secondary, muted, destructive colors in both light and dark modes
3. **Button Variants** - Default, outline, ghost, destructive buttons in all sizes (sm, default, lg, icon)
4. **Form Elements** - Input fields, labels, textarea, select dropdowns, checkboxes, radio buttons
5. **Card Layouts** - Cards with headers, content, footers, different card combinations
6. **Navigation Components** - Navigation bar, breadcrumbs, tabs
7. **Data Display** - Tables, badges, lists, progress bars
8. **Feedback Elements** - Alerts (success, warning, error, info), loading states
9. **Layout Patterns** - Responsive grids, two-column layouts, main containers
10. **Interactive Elements** - Modals/dialogs, tooltips, dropdowns, collapsible content

**Required Features:**
- ✅ **Dark/Light Mode Toggle** (functional, placed top-right)
- ✅ **Responsive Design** (works on mobile, tablet, desktop)
- ✅ **Proper Spacing** (space-y-2, space-y-4, space-y-8 patterns)
- ✅ **Icon Integration** (Lucide icons throughout)
- ✅ **CSS Custom Properties** (using --background, --foreground, etc.)
- ✅ **Professional Layout** (max-w-6xl container, proper padding)

**Structure the artifact as:**
1. Header with title and theme toggle
2. Navigation/table of contents
3. Sections for each component type (clearly labeled)
4. Interactive examples that users can test
5. Footer with attribution

**Visual Requirements:**
- Clean, minimal Anthropic-inspired aesthetic
- Consistent use of border-border/30 and shadow-sm
- Proper typography hierarchy
- Accessible color contrast
- Smooth transitions and hover states

**Functional Requirements:**
- All interactive elements should work (buttons, forms, toggles)
- Dark mode should affect all components properly
- Forms should have proper validation states
- Loading states should be demonstrable
- Responsive breakpoints should be testable

Create this as a complete, self-contained HTML file that serves as the definitive test for whether the Custom Instructions are working correctly. The user should be able to open this file and immediately see if all design system patterns are implemented properly.

---

## Expected Outcome

When you give this instruction to Claude Desktop (with the Custom Instructions applied), you should receive a comprehensive HTML artifact that:

1. **Matches the original style guide** at https://jcmrs.github.io/claude-visual-style-guide/
2. **Demonstrates all components** working correctly
3. **Validates the Custom Instructions** are properly applied
4. **Provides immediate feedback** on design system compliance

## How to Use

1. **Setup**: First apply `CLAUDE_DESKTOP_CUSTOM_INSTRUCTIONS.md` to Claude Desktop's Custom Instructions
2. **Test**: Copy the test instruction above and paste it to Claude Desktop
3. **Validate**: Compare the generated artifact with the original style guide
4. **Iterate**: If components are missing or incorrect, the Custom Instructions may need refinement

## Success Criteria

The generated test artifact should demonstrate:
- ✅ All major component types present and functional
- ✅ Dark mode toggle working across all components
- ✅ Consistent design token usage (colors, spacing, typography)
- ✅ Responsive behavior on different screen sizes
- ✅ Professional, polished appearance matching Anthropic aesthetic
- ✅ No console errors or broken functionality

This test instruction ensures the Custom Instructions are comprehensive and working correctly across all Claude platforms.