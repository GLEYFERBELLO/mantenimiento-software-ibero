type CourseSearchProps = {
  defaultQuery: string;
  selectedCategory?: string;
  selectedLevel?: string;
};

export default function CourseSearch({
  defaultQuery,
  selectedCategory,
  selectedLevel,
}: CourseSearchProps) {
  return (
    <form
      action="/"
      className="mb-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      {selectedCategory && (
        <input type="hidden" name="category" value={selectedCategory} />
      )}

      {selectedLevel && <input type="hidden" name="level" value={selectedLevel} />}

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          name="q"
          defaultValue={defaultQuery}
          placeholder="Buscar por curso, categoría o instructor..."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
        />

        <button
          type="submit"
          className="rounded-2xl bg-blue-700 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-800"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}