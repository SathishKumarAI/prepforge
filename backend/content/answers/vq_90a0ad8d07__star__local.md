---
qid: vq_90a0ad8d07__star__local
question: What exactly does the "Print Condition" do?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 355
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:46-05:00'
sources: []
---

**Situation** – I was working on a code‑review assignment for a data‑structures course where the instructor asked us to implement a “Print Condition” function for a binary search tree (BST). The goal was to output all nodes that satisfied a custom predicate while keeping the traversal efficient.

**Task** – My job was to write `printCondition(Node root, Predicate p)` so it would traverse the BST, evaluate each node against the predicate, and print only those that matched, without traversing unnecessary branches. I also had to ensure the function ran in O(n) time and used minimal stack space.

**Action** – I chose an iterative inorder traversal with a manual stack to avoid recursion depth issues on large trees. Inside the loop, after popping a node, I applied `if (p.test(node.val)) { System.out.println(node.val); }`. To prune branches early, if the predicate involved value ranges, I compared the target range against the current subtree’s min/max and skipped whole subtrees when impossible to satisfy. This kept the stack size bounded by the tree height.

**Result** – The function printed exactly 42 nodes from a 1,000‑node test tree in under 5 ms, meeting the O(n) requirement. I learned how predicate logic can be combined with traversal order to achieve efficient filtering and how careful stack management prevents stack overflow on deep trees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
