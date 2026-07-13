---
qid: q038
question: "Explain precision, recall, and F1 score. When would you prioritize each?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

I'd define them from the confusion matrix, then tie the choice to customer cost — pure **Customer Obsession** plus **Dive Deep**. Precision = TP/(TP+FP): of everything I flagged positive, how much was right. Recall = TP/(TP+FN): of all true positives, how many I caught. F1 is their harmonic mean, useful when I need one number and classes are imbalanced. Accuracy is misleading under imbalance, so I avoid leading with it.

The priority depends on which error hurts the customer more. "For a medical-style or fraud-detection screen, missing a true case (false negative) is costly, so I optimize recall and accept more false positives for human review. For a spam filter or a 'promote this to the customer' model, a false positive erodes trust, so I optimize precision." I'd stress I don't pick a threshold blindly — I choose the operating point on the precision-recall curve that matches the business cost ratio.

I'd ground it: "On fraud I moved the threshold to hit 92% recall, catching 30% more fraud while keeping the review queue within ops capacity." That's **Deliver Results** under a real constraint.

A bar-raiser listens for whether I map the metric to a concrete business cost, not just define terms.
