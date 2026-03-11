# Contributing to The Friendly Manifesto

## Adopt the Manifesto

To publicly declare your adoption of The Friendly Manifesto, submit a pull request adding your entry to `src/data/adopters.json`.

### Entry format

Each entry is a JSON object with the following fields:

| Field  | Required | Description |
|--------|----------|-------------|
| `name` | Yes      | Your project, organisation, or platform name. |
| `url`  | Yes      | A link to your project, website, or repository. |
| `role` | Yes      | One of `"developer"`, `"gatekeeper"`, or `"user"` — the section of the manifesto you are committing to. |
| `since`| No       | The month you adopted the manifesto, in `YYYY-MM` format (e.g. `"2026-03"`). |

### Example

```json
[
  {
    "name": "Digital Paint",
    "url": "https://github.com/example/digitalpaint",
    "role": "developer",
    "since": "2026-03"
  }
]
```

### Steps

1. Fork this repository.
2. Add your entry to the end of the array in `src/data/adopters.json`.
3. Submit a pull request with the title: `Adopt: <Your Name>`.
4. Your PR will be reviewed and merged — no other changes are needed.

> You may adopt more than one role. Add a separate entry for each role.

---

## Translate the Manifesto

Translations are managed via [Weblate](https://hosted.weblate.org). If you'd like to contribute a translation:

1. Visit the project on Weblate (link TBC).
2. Select your language and begin translating.

If your language is not yet listed, open an issue and we will add it.

### What gets translated

- **Manifesto content** — the markdown files in `src/content/manifesto/`.
- **UI strings** — the JSON files in `src/i18n/` (header, footer, badge section text).

### Adding a new language manually

If you prefer to submit translations via PR rather than Weblate:

1. Copy `src/content/manifesto/en-GB.md` to a new file named with the appropriate locale code (e.g. `fr-FR.md`).
2. Update the frontmatter fields (`lang`, `langLabel`) to match the new locale.
3. Translate the manifesto content.
4. Copy `src/i18n/en-GB.json` to a new file (e.g. `fr-FR.json`) and translate the UI strings.
5. Register the new language in `src/i18n/config.ts` — add the locale, label, and flag code.
