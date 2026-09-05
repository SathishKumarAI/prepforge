---
qid: ing_2063f5be78__star__local
question: 'Explain: Site cookies: Guess what? Those don’t work either!'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 387
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:17-05:00'
sources: []
---

**Situation:**  
While leading a feature‑engineering sprint for a real‑time recommendation engine at an e‑commerce startup, we discovered that our A/B test traffic was skewed by users who were repeatedly logging in from shared devices. The analytics dashboard showed a 30% drop in conversion during peak hours, and the product manager suspected cookie tracking issues.

**Task:**  
I had to identify why session persistence wasn’t working across browsers and devise a reliable method for distinguishing genuine user sessions from shared‑device noise without violating privacy or adding latency.

**Action:**  
First, I audited our cookie strategy: we were using only first‑party “session_id” cookies set with `SameSite=Lax` and no expiration. I realized that when users opened the site in a new tab or switched browsers, the cookie was lost, causing the server to treat them as new sessions. To fix this, I introduced an encrypted, rotating token stored in a secure HttpOnly cookie (`user_id_token`) with a 24‑hour lifespan and `SameSite=Strict`. I also added a client‑side fingerprinting fallback that combined device language, timezone, and canvas hash—hashed with HMAC—to generate a deterministic identifier for anonymous users. On the server, we mapped these identifiers to a single session record in Redis, ensuring idempotent session creation.

**Result:**  
After deploying the new cookie logic, traffic distribution normalized: conversion rates rebounded by 18% during peak periods, and repeat‑visit metrics improved from 12% to 27%. The team learned that relying solely on simple session cookies can break in shared or multi‑tab scenarios; combining secure tokens with deterministic fingerprints provides robust session continuity without compromising user privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
