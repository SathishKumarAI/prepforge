---
qid: q057
question: "What do variance and standard deviation measure?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State that both measure *dispersion* (spread around the mean) and that the interesting part is how they relate and differ in interpretability. Assume they may probe the sample vs population distinction.

2. **Mental model.** Variance is the average squared deviation; standard deviation is its square root, brought back into the data's own units. Squaring is what makes variance convenient mathematically yet hard to read directly.

3. **Reason step by step.** Define variance as the mean of squared deviations from the mean, dividing by N for a population or by n minus 1 for a sample (Bessel's correction). Standard deviation is its square root. Explain the units point: variance is in squared units (hard to interpret), SD is in the same units as the data (intuitive). Larger means more spread; zero means all identical.

4. **Traps to avoid.** Do not confuse them with central tendency. Do not say variance is in the same units as the data (that is the SD). Do not say SD can be negative (it cannot). Remember the n minus 1 for samples.

5. **Sanity-check and communicate.** Verify the square-root relationship and the units claim. Add the empirical rule for a normal distribution (68/95/99.7 within one/two/three SD) to show you can connect spread to probability, and note both are outlier-sensitive because deviations are squared.
