---
qid: q001
question: "What is the difference between Artificial Intelligence, Machine Learning, and Deep Learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** When I joined a retail analytics startup, the leadership team kept using "AI," "ML," and "deep learning" interchangeably in the product roadmap, and it was causing real confusion about what we could actually ship in one quarter.

**Task** I was asked to lead a lunch-and-learn to align engineering and product on the scope of each term so we'd stop over-promising to customers.

**Action** I framed it as nested circles. AI is the broad umbrella: any system that mimics intelligent behavior, including our old rule-based recommendation engine. ML is the subset that learns patterns from data instead of hard-coded rules, like the gradient-boosted churn model we ran in scikit-learn. Deep learning is a further subset using multi-layer neural networks, which we only needed for the image-based product tagging using a CNN. I mapped each of our features to one of the three.

**Result** The team dropped a proposed deep-learning project that a simple logistic-regression ML model solved in two weeks. We cut that feature's timeline by roughly 60%. What I learned: naming the right tier prevents massive over-engineering.
