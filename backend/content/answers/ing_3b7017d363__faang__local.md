---
qid: ing_3b7017d363__faang__local
question: 'Explain: rules like if a rook moves then — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 487
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:37-05:00'
sources: []
---

**Clarify**  
You’re asking how a chess engine encodes movement rules—specifically the rook’s move set—and how that translates into code for a “Coding Adventure” project. I’ll assume we need: (1) a representation of board state, (2) logic to generate legal rook moves, and (3) integration with a simple UI or CLI.

**Approach**  
1. Represent the board as an 8×8 array or bitboard.  
2. For each rook square, iterate in four orthogonal directions until hitting edge or another piece.  
3. Stop when encountering own piece; include capture squares for opponent pieces.  
4. Return a list of target coordinates.

**Depth**  
```python
def rook_moves(board, pos):
    moves = []
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    r,c = pos
    color = board[r][c].color
    for dr,dc in dirs:
        nr,nc=r+dr,c+dc
        while 0<=nr<8 and 0<=nc<8:
            target=board[nr][nc]
            if target is None:          # empty square
                moves.append((nr,nc))
            else:
                if target.color!=color:
                    moves.append((nr,nc))   # capture
                break                      # blocked
            nr+=dr; nc+=dc
    return moves
```
Complexity: O(1) per rook (constant 14‑max squares). Bitboard implementation can push to SIMD and reduce branching.

**Edge Cases**  
- Rook on a corner or edge → fewer directions.  
- En passant irrelevant for rooks.  
- Castling involves rooks but is handled separately.  
- Pawn promotion or castling rights do not affect rook moves directly.

**Optimize & Communicate**  
For a large‑scale engine, replace loops with precomputed move tables and use bitboards to shift bits in O(1). In the interview, I’d narrate: “We start with clear board abstraction, then iterate directions; this keeps code readable while being efficient. If performance becomes critical, we’ll switch to bitboards.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
