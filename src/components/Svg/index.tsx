import { ReactSVG } from 'react-svg';

interface SvgProps {
    src: string;
    width: string;
    height: string;
    path?: string;
    stroke?: string;
    fill?: string;
}

export default function ImgSVG({
    src,
    height,
    width,
    path,
    stroke,
    fill
}: Readonly<SvgProps>) {
    return <div style={{ height: `${height}px`, width: `${width}px` }}>
        <ReactSVG src={src} beforeInjection={(svg: SVGElement) => {
            svg.setAttribute('width', width);
            svg.setAttribute('height', height);
            svg.querySelectorAll('path').forEach((pathElement) => {
                path && pathElement.setAttribute('fill', path);
                stroke && pathElement.setAttribute('stroke', stroke);
            });
            fill && svg.querySelector('fill')?.setAttribute('fill', fill);
        }} />
    </div>
};