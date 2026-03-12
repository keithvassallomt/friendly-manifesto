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

## Declare Conformity

If you're adopting the manifesto, you can go a step further and publicly declare how your project or platform conforms to each principle. We provide two ready-made templates for this:

- **[FRIENDLY_DEVELOPER.md](templates/FRIENDLY_DEVELOPER.md)** — for Software Developers (covers Section 2 of the manifesto)
- **[FRIENDLY_GATEKEEPER.md](templates/FRIENDLY_GATEKEEPER.md)** — for Gatekeepers (covers Section 3 of the manifesto)

### How to use

1. Copy the relevant template into your own repository.
2. Fill in each section honestly — checkboxes for yes/no commitments, text fields for details, and links for evidence.
3. Partial conformity is absolutely fine. The point is transparency, not perfection.

The templates are self-assessed and voluntary. They are not a certification or legal document. By filling one in, you're publicly committing to these principles and inviting others to hold you to them.

---

## Translate the Manifesto

We'd love help translating the manifesto into more languages. Right now translations are handled via pull requests.

### What gets translated

- **Manifesto content** — the markdown files in `src/content/manifesto/`.
- **UI strings** — the JSON files in `src/i18n/` (header, footer, badge section text).

### Adding a new language

1. Copy `src/content/manifesto/en-GB.md` to a new file named with the appropriate locale code (e.g. `fr-FR.md`).
2. Update the frontmatter fields (`lang`, `langLabel`) to match the new locale.
3. Translate the manifesto content.
4. Copy `src/i18n/en-GB.json` to a new file (e.g. `fr-FR.json`) and translate the UI strings.
5. Register the new language in `src/i18n/config.ts` — add the locale, label, and flag code.
6. Submit a pull request with the title: `Translate: <Language Name>`.

If you're not sure about something or want to check before starting, feel free to open an issue first.

---

### A note on existing translations

Some translations (currently French, Spanish, and Italian) were AI-generated as a starting point. They have only been reviewed by a non-native speaker, so there may be awkward phrasing, incorrect terminology, or subtle errors. If you speak one of these languages, we would really appreciate your help reviewing and improving them. Even small fixes are welcome.
