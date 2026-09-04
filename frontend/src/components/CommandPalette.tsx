import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useProgress } from "../hooks/useProgress";
import { useQuestionIndex } from "../hooks/useQuestionIndex";
import { useUserCards } from "../hooks/useUserCards";
import { isUserCardId, USER_CARD_TOPIC } from "../lib/userCards";
import type { QuestionLite } from "../lib/api";
import { DifficultyBadge, TopicBadge } from "./Badge";

/**
 * Ctrl/Cmd+K: one box that reaches the whole app from anywhere.
 *
 * Built on shadcn's Command (cmdk), which owns the listbox roles, the arrow
 * keys, Enter, hover-to-select and keeping the selected row in view. This
 * file owns what to list: the destinations, and a title-only Fuse search over
 * the bank plus the cards you wrote. `shouldFilter={false}` because Fuse is
 * the filter — cmdk's own substring match would run a second time over what
 * Fuse already ranked and reorder it.
 *
 * Owns: the query and what a result does. Does NOT own the question data
 * (useQuestionIndex's shared cache) or Library's own filters — picking a
 * question here hands Library the id in the URL and Library does the rest.
 */

interface Command {
  id: string;
  label: string;
  hint: string;
  to: string;
}

const COMMANDS: Command[] = [
  { id: "today", label: "Today", hint: "what to do right now", to: "/" },
  { id: "recall", label: "Study — recall", hint: "the cards that are due", to: "/study?mode=recall" },
  { id: "drill", label: "Study — drill", hint: "a pass that does not move due dates", to: "/study?mode=drill" },
  { id: "quiz", label: "Study — quiz", hint: "multiple choice, scored", to: "/study?mode=quiz" },
  { id: "library", label: "Library — questions", hint: "the whole bank", to: "/library?view=questions" },
  { id: "saved", label: "Library — saved", hint: "what you bookmarked", to: "/library?view=saved" },
  { id: "mine", label: "Library — cards I made", hint: "written from a highlight", to: "/library?view=saved&scope=mine" },
  { id: "collections", label: "Library — collections", hint: "sources and documents", to: "/library?view=collections" },
  { id: "feed", label: "Library — feed", hint: "articles and videos", to: "/library?view=feed" },
  { id: "reader", label: "Reader", hint: "open a document or a URL", to: "/reader" },
  { id: "notes", label: "Notes", hint: "your notes", to: "/notes" },
  { id: "graph", label: "Notes — graph", hint: "how the notes connect", to: "/notes?view=graph" },
  { id: "progress", label: "Progress", hint: "what you have recorded", to: "/progress" },
];

/** Results shown before you type, and the cap once you do. Twelve is what fits
 *  without the list becoming a page of its own. */
const LIMIT = 12;

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  // Fetched on the first open, not on app start: a palette nobody opens should
  // cost nothing, and this is the titles-only projection, not the 15 MB bank.
  const { rows: questions, loading: indexLoading } = useQuestionIndex(open);
  const { progress } = useProgress();
  const { cards: ownCards } = useUserCards();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  /**
   * Cards you wrote, searched alongside the bank. They are local, so they cost
   * nothing to include — and leaving them out meant the one box that reaches
   * the whole app could not reach the deck you built by hand.
   */
  const searchable = useMemo<QuestionLite[]>(
    () => [
      ...questions,
      ...ownCards.map((c) => ({
        id: c.id,
        question: c.question,
        topic: USER_CARD_TOPIC,
        difficulty: "medium",
      })),
    ],
    [questions, ownCards],
  );

  // Titles only, and only while the palette is open. Library's own search reads
  // answers and tags too, which is right there and wrong here: this is a jump
  // box, and an 8,330-answer index built on every app start is not free.
  const fuse = useMemo(
    () =>
      open
        ? new Fuse(searchable, { keys: ["question", "topic"], threshold: 0.35, ignoreLocation: true })
        : null,
    [open, searchable],
  );

  const q = query.trim();

  const commandHits = useMemo(() => {
    if (!q) return COMMANDS.slice(0, 6);
    const needle = q.toLowerCase();
    return COMMANDS.filter((c) => (c.label + " " + c.hint).toLowerCase().includes(needle));
  }, [q]);

  const questionHits = useMemo(() => {
    // Empty box: what you were just reading, which is the likeliest thing you
    // opened this to get back to. Ids only are stored, so they are resolved
    // against the index — one that no longer exists simply drops out.
    if (!q) {
      const byId = new Map(searchable.map((row) => [row.id, row]));
      return progress.recent
        .map((id) => byId.get(id))
        .filter(Boolean)
        .slice(0, 5) as QuestionLite[];
    }
    if (!fuse) return [];
    return fuse.search(q, { limit: LIMIT }).map((r) => r.item);
  }, [fuse, q, searchable, progress.recent]);

  function go(to: string) {
    onClose();
    navigate(to);
  }

  function openQuestion(row: QuestionLite) {
    onClose();
    // A card you wrote is not in the bank, so Library's questions view cannot
    // resolve its id — it lives in Saved, under its own scope.
    if (isUserCardId(row.id)) navigate("/library?view=saved&scope=mine");
    // Library reads ?id= and opens that question in the detail pane; ?q= puts
    // the same words in its own box, so the list around the answer is the list
    // you were looking for rather than all 8,330.
    else
      navigate(
        `/library?view=questions&id=${encodeURIComponent(row.id)}&q=${encodeURIComponent(q)}`,
      );
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={(o) => !o && onClose()}
      title="Search questions, or jump to a page"
      shouldFilter={false}
    >
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search questions, or jump to a page"
      />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>
          {indexLoading ? "Loading the question index…" : `Nothing matches “${q}”.`}
        </CommandEmpty>
        {commandHits.length > 0 && (
          <CommandGroup heading="Go to">
            {commandHits.map((c) => (
              <CommandItem key={c.id} value={`cmd-${c.id}`} onSelect={() => go(c.to)}>
                <ArrowRight aria-hidden="true" className="text-overlay0" />
                <span className="min-w-0 flex-1 truncate">{c.label}</span>
                <span className="shrink-0 text-micro text-overlay0">{c.hint}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {questionHits.length > 0 && (
          // With an empty box the question rows are your recent reading, and
          // without a word saying so they read as an unexplained second list.
          <CommandGroup heading={q ? "Questions" : "Recently read"}>
            {questionHits.map((row) => (
              <CommandItem key={row.id} value={`q-${row.id}`} onSelect={() => openQuestion(row)}>
                <span className="min-w-0 flex-1 truncate">{row.question}</span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <TopicBadge topic={row.topic} />
                  <DifficultyBadge difficulty={row.difficulty} />
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>

      <div className="flex items-center gap-3 border-t px-4 py-2 text-micro text-overlay0">
        <span>↑↓ move</span>
        <span>↵ open</span>
        <span>esc close</span>
        {q && questionHits.length > 0 && (
          <span className="ml-auto tabular-nums">
            {questionHits.length} of {questions.length.toLocaleString()} questions
          </span>
        )}
      </div>
    </CommandDialog>
  );
}
