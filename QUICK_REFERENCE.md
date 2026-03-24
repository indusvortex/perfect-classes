# Quick Reference: Extracted Page Components

## Import Examples

### Using the index file (recommended):
```typescript
import { HomePage, MissionPage, ClassPage, ContactPage } from '@/pages';
```

### Direct imports:
```typescript
import HomePage from '@/pages/HomePage';
import MissionPage from '@/pages/MissionPage';
import ClassPage from '@/pages/ClassPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfUsePage from '@/pages/TermsOfUsePage';
import PagePlaceholder from '@/pages/PagePlaceholder';
```

### Shared component:
```typescript
import FloatingIcon from '@/components/shared/FloatingIcon';
```

## Page Component Details

| Component | File | Size | Dependencies | Notes |
|-----------|------|------|--------------|-------|
| HomePage | `src/pages/HomePage.tsx` | 1.9 KB | None (placeholder) | Needs 9 child components extracted |
| MissionPage | `src/pages/MissionPage.tsx` | 49 KB | Link, motion, icons | Includes VipinSirSection helper |
| ClassPage | `src/pages/ClassPage.tsx` | 59 KB | useParams, motion, PagePlaceholder, FloatingIcon | Has embedded class data constants |
| ContactPage | `src/pages/ContactPage.tsx` | 11 KB | icons | Form with state management |
| PrivacyPolicyPage | `src/pages/PrivacyPolicyPage.tsx` | 7.4 KB | Link, icons | Static content with sections |
| TermsOfUsePage | `src/pages/TermsOfUsePage.tsx` | 8.3 KB | Link, icons | Static content with sections |
| PagePlaceholder | `src/pages/PagePlaceholder.tsx` | 1.3 KB | Link, icons | Fallback for unimplemented pages |

## Usage in App.tsx Routes

```typescript
import {
  HomePage,
  MissionPage,
  ClassPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsOfUsePage
} from '@/pages';

// In your routes:
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/mission" element={<MissionPage />} />
  <Route path="/class/:classId" element={<ClassPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/privacy" element={<PrivacyPolicyPage />} />
  <Route path="/terms" element={<TermsOfUsePage />} />
</Routes>
```

## Known Issues & TODOs

### HomePage (High Priority)
- ❌ Child components not extracted yet (still in App.tsx)
- Components needed: InteractiveHero, QuickLinks, TestSeriesExplorer, BooksShowcase, WhyUs, Testimonials, Stats, EnrollCTA, FAQ
- Location: Should be in `src/components/home/`

### ClassPage (Medium Priority)
- ⚠️ Embedded constants: `BY_CLASS_SERIES`, `CLASS_DATA`
- Should be moved to: `src/data/classes.ts`

### MissionPage & ClassPage (Medium Priority)
- ⚠️ Duplicate language context definitions
- Should be centralized in: `src/i18n/context.tsx`

### Translation System (Medium Priority)
- ⚠️ Translation object `T` still in App.tsx
- Should be moved to: `src/i18n/translations.ts`

## File Sizes

```
Total pages directory: 153 KB

Breakdown:
- ClassPage.tsx:          59 KB (largest - has embedded data)
- MissionPage.tsx:        49 KB (second largest - complex page)
- ContactPage.tsx:        11 KB
- TermsOfUsePage.tsx:     8.3 KB
- PrivacyPolicyPage.tsx:  7.4 KB
- HomePage.tsx:           1.9 KB (placeholder only)
- PagePlaceholder.tsx:    1.3 KB
- index.ts:               427 B
```

## Verification Checklist

- [x] All 7 page components extracted
- [x] All files have proper imports
- [x] All files export default component
- [x] Index file created for easy imports
- [x] FloatingIcon moved to shared components
- [x] No syntax errors in extracted files
- [ ] Update App.tsx to import from @/pages
- [ ] Extract HomePage child components
- [ ] Extract language/i18n system
- [ ] Extract class data constants
- [ ] Test all routes

## Next Action

Update `App.tsx` to import these components:

```typescript
// Remove the component definitions from App.tsx (lines 2206-3270)
// Add these imports at the top:
import {
  HomePage,
  MissionPage,
  ClassPage,
  ContactPage,
  PrivacyPolicyPage,
  TermsOfUsePage
} from '@/pages';

// Remove the old function definitions
// Keep the Routes section unchanged
```
