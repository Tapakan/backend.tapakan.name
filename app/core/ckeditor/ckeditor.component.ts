import { Component, ViewChild, Input, Output, EventEmitter, NgZone } from "@angular/core";

@Component({
    selector   : "eva-ckeditor",
    templateUrl: "app/core/ckeditor/ckeditor.component.html"
})

export class CKEditorComponent
{
    @Input() config;
    @Input() content;

    @Output() notify = new EventEmitter();

    //The internal data model
    private _value: any = '';
    private instance;
    private zone;

    @ViewChild('host') host;

    /**
     *
     * @param zone
     */
    constructor(zone: NgZone)
    {
        this.zone = zone;
    }

    /**
     * On component view init
     */
    ngAfterViewInit()
    {
        // Configuration
        var config = this.config || {};
        this.init(config);
    }

    /**
     * Init CKEDITOR
     * @param config
     */
    init(config)
    {
        if (!CKEDITOR) {
            console.error('Please include CKEditor in your page');
        }

        this.instance = CKEDITOR.replace(this.host.nativeElement, config);

        this.instance.setData(this.content);
        this.instance.on('change', () =>
        {
            let value = this.instance.getData();
            this.updateValue(value);
        });
    }

    /**
     * Value update process
     */
    updateValue(value)
    {
        this.zone.run(() =>
        {
            this.value = value;
            this.notify.emit(value);
        });
    }

    onClick()
    {
        this.content = this.instance.getData();
        this.notify.emit(this.instance.getData());
    }

    //get accessor
    get value(): any
    {
        return this._value;
    };

    //set accessor including call the onchange callback
    set value(v: any)
    {
        if (v !== this._value) {
            this._value = v;
        }
    }
}