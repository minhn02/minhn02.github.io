# minh02.com

Personal website of Minh Nguyen, built with [al-folio](https://github.com/alshedivat/al-folio) v1.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Or with Docker: `docker compose up`.

## Updating al-folio

`upstream` points to `alshedivat/al-folio`. To pull in upstream changes:

```bash
git fetch upstream
git merge upstream/main   # resolve conflicts, keeping site content
bundle exec al-folio upgrade audit
```

Upstream's demo content (posts, news, demo projects, etc.) was intentionally removed;
if a merge re-adds it, delete it again.
