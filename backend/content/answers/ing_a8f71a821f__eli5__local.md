---
qid: ing_a8f71a821f__eli5__local
question: A shipped Copilot feature that summarises job applicants for recruiters
  is accused of working worse for some groups of candidates. How do you establish
  whether that's true, and what do you do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 258
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:44-05:00'
sources: []
---

Imagine the AI is a librarian who scans every résumé and writes a short “book blurb” for recruiters. To see if it’s treating all authors fairly, first gather a balanced collection of résumés from every group you care about—like making sure the library has equal numbers of books in each language. Next, let the librarian write blurbs for this sample and then have independent reviewers rate how helpful or biased those blurbs are; this is your “fairness audit.” If some groups consistently get weaker blurbs, that means the librarian’s training data or rules were skewed—maybe it learned more from one genre of books. Fix it by adding missing examples to the training set (more résumés from under‑represented groups), tweaking the algorithm so it weighs features equally, and then re‑testing until the ratings line up across all groups. Finally, keep monitoring: every time new résumés arrive, run a quick check to catch any drift before it becomes a problem again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
