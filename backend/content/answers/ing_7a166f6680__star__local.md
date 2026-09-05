---
qid: ing_7a166f6680__star__local
question: 'Explain: No results found — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 371
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:38:01-05:00'
sources: []
---

**Situation**  
While preparing a workshop on building a search engine with the Haystack library, I ran into an issue: every time I executed `haystack tutorial` from the command line, it returned “No results found – Tutorials”. The environment was a fresh Ubuntu 22.04 VM with Python 3.10 and virtualenv; all dependencies had been installed via pip.

**Task**  
I needed to identify why the CLI couldn’t locate the bundled tutorials, restore the documentation path for participants, and ensure the same setup would work on attendees’ laptops.

**Action**  
First, I checked the `haystack` package contents with `pip show haystack` and verified that the `data/tutorials` directory existed. The problem turned out to be a missing environment variable: Haystack’s CLI reads `HAYSTACK_TUTORIALS_PATH`, defaulting to `$HOME/.haystack/tutorials`. I added this variable pointing to the correct subfolder in the site-packages path, then updated the shell profile (`export HAYSTACK_TUTORIALS_PATH=$(python -c "import haystack, os; print(os.path.join(haystack.__path__[0], 'data', 'tutorials'))")`). After reloading the shell, the command listed all tutorials. I also scripted a small Bash wrapper that automatically sets the variable and runs `haystack tutorial`.

**Result**  
The workshop proceeded smoothly: participants accessed all tutorials without error, and we completed the demo 30 % faster than planned. I learned the importance of environment variables in library CLI tools and documented the fix in our internal setup guide to prevent future confusion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
