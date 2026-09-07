---
qid: ing_54a5bb3d7c__faang__local
question: 'Explain: be captured on the next move so — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 548
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:00:50-05:00'
sources: []
---

**Clarify**  
We need a method that, given a chess position and the current player’s legal moves, identifies whether any of those moves would result in *being captured on the very next opponent turn*. In other words: “Is there a move that guarantees my piece will be taken immediately after I play it?”  

Assumptions to confirm:  
- Standard 8×8 board with all pieces.  
- Legal moves include captures, promotions, en‑passant, and castling.  
- We ignore check/mate complications unless they affect capture probability.

**Approach**  
1. Enumerate all legal moves for the current player.  
2. For each move, generate the resulting board state.  
3. Simulate every opponent legal move from that new state.  
4. If *any* of those opponent moves captures the piece we just moved, flag it as “captured next turn.”  

**Depth** (Python‑style pseudocode)  
```python
def will_be_captured_next(board, player):
    for mv in board.generate_moves(player):
        new_board = board.apply(mv)
        if any(opponent_move.captures_piece_at(new_board, mv.to_square)
               for opponent_move in new_board.generate_moves(1-player)):
            return True
    return False
```
*Complexity*:  
- Let *M* be the number of player moves and *N* the opponent’s legal moves.  
- Time ≈ O(M × N). With pruning (e.g., skip moves that are protected), this is acceptable for a single‑turn lookahead.

**Edge Cases**  
- Castling: the king moves two squares; ensure opponent’s move set reflects new piece positions.  
- Promotion: a pawn becomes a queen/rook/bishop/knight—its capture risk changes.  
- En‑passant: only valid immediately after the double push.  
- Check: if moving into check, it is illegal and should be excluded.

**Optimize & Communicate**  
We can memoize opponent move generation per board state to avoid recomputation. Additionally, a *protect* heuristic (counting defenders) lets us prune safe moves early. In an interview, I’d explain the algorithm step‑by‑step, discuss pruning strategies, and justify the O(M × N) complexity as optimal for a one‑ply lookahead while keeping code clear and testable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
