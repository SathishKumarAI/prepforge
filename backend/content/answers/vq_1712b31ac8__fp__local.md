---
qid: vq_1712b31ac8__fp__local
question: What is the difference between a LIST BOX and a COMBO BOX ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 411
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:24:25-05:00'
sources: []
---

In UI terms a *list box* and a *combo box* are both **set‑selection widgets** that present a list of options to the user.  
The core problem they solve is: “How do we let a person choose one item from a finite set while preserving screen real estate?”

- **List Box** – The list is always **visible**. It consumes vertical space equal to `n × rowHeight`. This guarantees that every option can be seen, read, and selected without scrolling or typing. Because the options are laid out in a fixed grid, the widget’s layout cost is linear in `n`, and no extra event handling (e.g., key‑navigation) is required beyond simple mouse clicks.

- **Combo Box** – The list is **collapsed** until activated, usually by clicking an arrow or pressing `Alt+Down`. Only one item is displayed. When expanded it behaves like a small, temporary list box. This saves space but introduces a *two‑step interaction*: first open the menu, then pick. It also requires additional state (open/closed) and keyboard support for navigation.

**Deeper principle:**  
The trade‑off is between **information density** and **interaction complexity**. A list box offers low cognitive load (all options visible), while a combo box reduces visual clutter at the cost of an extra action. The optimal choice depends on `n` and the expected frequency of selection: for small, frequently accessed lists, a combo box is efficient; for large or rarely changed sets, a list box prevents user fatigue.

**Non‑obvious insight:**  
Because a combo box must remember its *open* state across different UI contexts (e.g., focus loss), it often becomes a source of subtle bugs in accessibility tools. A list box’s static nature sidesteps these issues, making it inherently more robust for screen readers and keyboard‑only users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
