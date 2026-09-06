---
qid: ing_8b9e27772c__fp__local
question: Your agent reads web pages and can send email. How do you defend against
  indirect prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 512
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:00-05:00'
sources: []
---

**Defending an agent that scrapes web pages and emails from *indirect* prompt injection**

1. **Fundamental problem**  
   The agent’s *context window* is a finite buffer of text (the scraped page + the user’s query). An attacker can embed hidden commands in the page’s HTML or JavaScript, which, when rendered into the context, become part of the prompt that drives the LLM. Because the model optimizes for maximum likelihood over the entire sequence, it will dutifully follow any high‑probability instruction—even if it originates from the web page.

2. **Why a strict filter is insufficient**  
   A naive “block all code tags” approach removes only obvious vectors but leaves benign content that could still carry instructions via comments or obfuscated strings. The deeper issue is that *any* token in context can influence generation; thus we must enforce a *causal separation* between external text and the instruction space.

3. **Information‑theoretic defense**  
   Treat the agent’s prompt as a *channel* with two sources: user intent (high‑confidence) and web content (low‑confidence). By estimating the mutual information \(I(U;C)\) between user tokens \(U\) and content tokens \(C\), we can weight each token’s contribution to the final prompt. Tokens that exhibit unusually high cross‑entropy with user intent are flagged as potential injection vectors.

4. **Practical implementation**  
   * Tokenize the web page, compute a per‑token entropy against a language model fine‑tuned on benign web data.  
   * Set a threshold (e.g., 0.8 bits higher than baseline) and mask or remove tokens exceeding it before concatenation.  
   * Log masked regions for audit.

5. **Non‑obvious insight**  
   The key is to view the prompt as a *probabilistic mixture* rather than a deterministic string. By explicitly modeling uncertainty, we can let the LLM “decide” that a suspicious token has low posterior probability of belonging to user intent, thereby reducing its influence without brittle hard rules.

This principled approach turns indirect injection from a surface‑level attack into an information‑theoretic anomaly detection problem, giving the agent robust resilience while preserving legitimate content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
