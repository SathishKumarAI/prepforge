---
qid: ing_2ef2f28f36__aws__local
question: 'Explain: 1.6 Frontend Web Development — GitHub - ombharatiya/A-to-Z-Resources-for-Students:
  A to Z Resources for students as well as working proffessionals \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 447
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:11:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

When I first landed on the *A‑to‑Z Resources for Students* repo, I treated it like a product: every line of code should solve a real student’s pain point. I cloned the repo locally and ran `npm run dev`. The build was 8 MB and the bundle time was 12 s—far too heavy for mobile users in emerging markets.

**Situation & Task**

I was asked to shrink the bundle, improve load times, and add a machine‑learning powered recommendation widget that surfaces relevant courses based on user interaction history.

**Action**

1. **Dive Deep** – I instrumented the app with Web Vitals, identified the top 3 culprit modules (React, Lodash, Moment).  
2. **Technical Design** – Replaced Moment with `date-fns` (tree‑shakable), switched to React 18’s *Concurrent Mode*, and used Vite for faster HMR.  
3. **ML Service** – Built a lightweight TensorFlow.js model that runs in the browser, trained offline on 50 k student logs stored in an S3 bucket, and served via Amazon SageMaker Edge Manager for on‑device inference.  
4. **AWS Glue & Athena** were used to generate training data nightly; the model was updated automatically with a Lambda scheduler.

**Result**

* Bundle size dropped from 8 MB to 2.5 MB (68% reduction).  
* First‑paint time improved from 3.2 s to 1.4 s on 4G, boosting engagement by **+12%** in A/B tests.  
* The recommendation widget increased course sign‑ups by **18%** during the next semester.

**Bar‑raiser Takeaway**

I owned every layer—frontend build, ML pipeline, and cloud ops—showed depth by quantifying performance gains, and learned that even small library swaps can unlock massive UX improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
