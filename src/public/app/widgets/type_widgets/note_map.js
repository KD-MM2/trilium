import TypeWidget from "./type_widget.js";
import NoteMapWidget from "../note_map.js";

const TPL = `<div class="note-detail-note-map note-detail-printable"></div>`;

export default class NoteMapTypeWidget extends TypeWidget {
    static getType() { return "note-map"; }

    constructor() {
        super();

        this.noteMapWidget = new NoteMapWidget();
        this.child(this.noteMapWidget);
    }

    doRender() {
        this.$widget = $(TPL);
        this.$widget.append(this.noteMapWidget.render());

        super.doRender();
    }

    async doRefresh(note) {
        console.log("isEnabled", this.noteMapWidget.isEnabled());

        await this.noteMapWidget.refresh();
    }
}
