"""Where the backend keeps things. Every module reads these; none redefines them."""
from pathlib import Path

import generate as generate_mod

BASE = Path(__file__).parent
CONTENT = BASE / "content"
# Where generated answers are cached. Named here because the bank's version
# depends on it: see `bank._bank_stamp` and `bank._fill_missing_answers`.
ANSWERS_DIR = generate_mod.ANSWERS_DIR
DATA = BASE / "data"
CONFIG = BASE / "config" / "sources.yaml"
DATA.mkdir(exist_ok=True)
