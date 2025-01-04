import { ReactSVG } from 'react-svg';

interface SvgProps {
    src: string;
    width: string;
    height: string;
    path?: string;
    fill?: string;
}

export default function ImgSVG({
    src,
    height,
    width,
    path,
    fill
}: Readonly<SvgProps>) {
    return <ReactSVG src={src} beforeInjection={(svg: SVGElement) => {
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        path && svg.querySelector('path')?.setAttribute('fill', path);
        fill && svg.querySelector('fill')?.setAttribute('fill', fill);
    }} />;
};