from pathlib import Path


def create_file(filename: str):
    base_dir = Path("/home/atari-monk/atari-monk/project")
    target_dir = base_dir / "engine/docs/module"
    index_path = base_dir / "engine/docs/index.md"
    template_path = base_dir / "templates/content/module-info.md"

    file_path = target_dir / f"{filename}.md"

    lines = template_path.read_text(encoding="utf-8").splitlines()
    content = "\n".join(lines[1:-1])

    content = content.replace("module", filename)

    file_path.write_text(content + "\n", encoding="utf-8")

    with index_path.open("a", encoding="utf-8") as f:
        f.write(f"- [{filename}]({filename}/{filename}.md)\n")


create_file("circle")