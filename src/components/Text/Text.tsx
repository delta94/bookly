import React from 'react';

// * modules
import classnames from 'classnames';

// define all text types
type VariantProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type LineheightProps =
    | 'none'
    | 'light'
    | 'snug'
    | 'normal'
    | 'relaxed'
    | 'loose';

// integrate them here
type TextProps = {
    variant: VariantProps;
    lineheight: LineheightProps;
};

// main component props
type TextComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    keyof TextProps
> &
    Partial<TextProps>;

export const Text: React.FC<TextComponentProps> = props => {
    const {
        variant = 'p',
        lineheight = 'normal',
        className: nativeClassName,
        children,
        ...restProps
    } = props;

    const className = classnames([
        makeVariantClassName(variant),
        makeLineheightClassName(lineheight),
        nativeClassName,
    ]);

    return React.createElement(variant, { className, ...restProps }, children);
};

// return some classnames conditionally based on the `variant` props
function makeVariantClassName(variant: VariantProps): string[] {
    switch (variant) {
        case 'h1':
            return ['font-bold', 'text-5xl'];

        case 'h2':
            return ['font-bold', 'text-4xl'];

        case 'h3':
            return ['font-bold', 'text-3xl'];

        case 'h4':
            return ['font-bold', 'text-2xl'];

        case 'h5':
            return ['font-bold', 'text-xl'];

        case 'h6':
            return ['font-bold', 'text-base'];

        case 'p':
            return ['font-regular', 'text-sm'];

        default:
            return ['font-regular', 'text-base'];
    }
}

// return some classnames conditionally based on the `lineheight` props
function makeLineheightClassName(lineheight: LineheightProps): string[] {
    switch (lineheight) {
        case 'none':
            return ['leading-none'];

        case 'snug':
            return ['leading-snug'];

        case 'normal':
            return ['leading-normal'];

        case 'relaxed':
            return ['leading-relaxed'];

        case 'loose':
            return ['leading-loose'];

        default:
            return ['leading-normal'];
    }
}