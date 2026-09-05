---
qid: ing_d1b086ad9b__eli5__local
question: 'Explain: Key Environment Components — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 245
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:28-05:00'
sources: []
---

Imagine building a robot that can learn to play chess on a computer.  
The **environment** is everything outside the robot that it interacts with—like the chessboard, the opponent’s moves, and the rules of the game. The **computer** is the brain‑cell where all calculations happen; it takes the robot’s “questions” (what move to make) and returns answers (the result of that move).  

- **State**: The current layout of pieces on the board.  
- **Action**: A legal chess move the robot can choose.  
- **Reward**: Feedback such as +1 for a win, -1 for a loss, or 0 for a draw.  
- **Transition**: How the board changes after an action (the opponent’s reply).  

The AI agent sits between these parts: it observes the state via the computer, selects an action, receives a reward, and updates its strategy. Just as a chess player learns from each game, the agent learns from every interaction with this environment‑computer loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
