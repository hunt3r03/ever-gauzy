import { Component, Input, TemplateRef } from '@angular/core';
import { Collapsable } from './collapsable.interface';
import { Draggable } from './draggable.interface';
import { Expandable } from './expandable.interface';

@Component({ template: '' })
export abstract class GuiDrag implements Draggable, Expandable, Collapsable {
	protected _templateRef: TemplateRef<HTMLElement>;
	protected _position: number;
	protected _title: string;
	protected _collapsed: boolean = false;
	protected _move: boolean = false;
	public hide: boolean = false;

	constructor() {}

	public onClickSetting(event: boolean) {}
	@Input()
	public set templateRef(value: TemplateRef<HTMLElement>) {
		this._templateRef = value;
	}

	public get templateRef(): TemplateRef<HTMLElement> {
		return this._templateRef;
	}
	public set title(value: string) {
		this._title = value;
	}
	public get title(): string {
		return this._title;
	}
	public get position(): number {
		return this._position;
	}
	@Input()
	public set position(value: number) {
		this._position = value;
	}
	public get isExpand(): boolean {
		return !this._collapsed;
	}
	@Input()
	public set isExpand(value: boolean) {
		this._collapsed = !value;
	}
	public get isCollapse(): boolean {
		return this._collapsed;
	}
	@Input()
	public set isCollapse(value: boolean) {
		this._collapsed = value;
	}
	public get move(): boolean {
		return this._move;
	}
	public set move(value: boolean) {
		this._move = value;
	}
}
