export interface WebviewMetadata {
    id: string;
    title: string;
    src: string;
}

export enum EditorMode {
    DESIGN = 'design',
    INTERACT = 'interact',
    PAN = 'pan',
    INSERT_TEXT = 'insert-text',
    INSERT_DIV = 'insert-div',
    INSERT_IMAGE = 'insert-image',
}

export enum EditorTabValue {
    STYLES = 'styles',
    CHAT = 'chat',
    PROPS = 'properties',
}
