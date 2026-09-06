---
qid: ing_539bcdae35__think__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 591
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:31:27-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
   - The user wants an explanation of what a κ (Cohen’s Kappa) value below 0.6 indicates in terms of inter‑rater agreement.  
   - Assume they are familiar with basic statistics but not necessarily with the specific interpretation scale.  
   - They also ask to *rewrite* the criteria, so we should provide an alternative wording that conveys the same meaning.

**2. Choose a mental model / framework**  
   - Use the commonly cited Landis & Koch (1977) guidelines as a reference point: κ < 0 = poor; 0–0.20 slight; 0.21–0.40 fair; 0.41–0.60 moderate; 0.61–0.80 substantial; > 0.80 almost perfect.  
   - Map “kappa < 0.6” onto this scale (it spans the “moderate” boundary and everything below it).

**3. Step‑by‑step reasoning**  
   1. State that κ measures agreement beyond chance, ranging from –1 to +1.  
   2. Explain that a value under 0.6 means the observed concordance is not strong enough to be considered “moderate” or better.  
   3. Break down the sub‑ranges:  
      * 0–0.20: slight agreement, almost random.  
      * 0.21–0.40: fair agreement, still weak.  
      * 0.41–0.60: moderate agreement, acceptable but improvable.  
   4. Conclude that any κ below 0.6 falls into “poor” territory if we use a stricter interpretation or at least “not good enough”.

**4. Common traps to avoid**  
   - Don’t conflate κ with percent agreement; the former corrects for chance.  
   - Avoid saying “kappa < 0.6 is always bad”; context matters (e.g., highly imbalanced categories).  
   - Don’t quote outdated or overly strict thresholds without noting their origin.

**5. Sanity‑check & communication**  
   - Verify the numeric ranges against a reputable source (Landis & Koch, or more recent revisions).  
   - Phrase the rewrite in plain language: “If κ is less than 0.6, the agreement between raters can be described as weak to moderate; it falls below what many researchers consider acceptable.”  
   - Offer an example or visual cue if needed for clarity.

By following this structure you’ll produce a clear, accurate explanation and a concise alternative wording that satisfies the user’s request.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
