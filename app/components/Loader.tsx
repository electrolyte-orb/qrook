import { HTMLAttributes } from 'react';
export default function Loader({
	size,
}: {
	size?: 'small' | 'large' | 'full-width' | 'square';
}) {
	let sizePropsContainer;
	switch (size) {
		case 'square':
			sizePropsContainer = 'inline-block';
			break;

		default:
			sizePropsContainer = 'p-8 mt-10 flex justify-center';
			break;
	}

	return (
		<div className={sizePropsContainer}>
			<div className="w-16 h-16 grid place-items-center">
				<Icon className="w-8 h-8 inline-block" />
				<span
					className="text-xs font-bold text-black"
					style={{
						fontFeatureSettings: '"ss02"',
					}}
				>
					LOADING
				</span>
			</div>
		</div>
	);
}

function Icon(props: HTMLAttributes<HTMLOrSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{ margin: 'auto' }}
			width="200"
			height="200"
			display="block"
			preserveAspectRatio="xMidYMid"
			viewBox="0 0 100 100"
			{...props}
		>
			<g>
				<animateTransform
					attributeName="transform"
					dur="1s"
					repeatCount="indefinite"
					type="rotate"
					values="0 50 50;90 50 50"
				></animateTransform>
				<path d="M44.6 20.6c2.6 4.4 7 7.1 11.7 7.7 1.9-4.4 1.7-9.5-.8-14-2.6-4.4-7-7.1-11.7-7.7-1.9 4.4-1.8 9.6.8 14z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M60.023 21.839a15.914 15.914 0 006.283 12.518c3.845-2.86 6.222-7.377 6.307-12.524a15.914 15.914 0 00-6.282-12.519c-3.846 2.861-6.36 7.414-6.308 12.525z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M72.761 30.623a15.914 15.914 0 00-.818 13.983c4.76-.555 9.077-3.278 11.724-7.693a15.914 15.914 0 00.819-13.982c-4.761.554-9.214 3.24-11.725 7.692z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M79.4 44.6c-4.4 2.6-7.1 7-7.7 11.7 4.4 1.9 9.5 1.7 14-.8 4.4-2.6 7.1-7 7.7-11.7-4.4-1.9-9.6-1.8-14 .8z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M78.161 60.023a15.914 15.914 0 00-12.518 6.283c2.86 3.845 7.377 6.222 12.524 6.307a15.914 15.914 0 0012.519-6.282c-2.861-3.846-7.414-6.36-12.525-6.308z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M69.377 72.761a15.914 15.914 0 00-13.983-.818c.555 4.76 3.278 9.077 7.693 11.724a15.914 15.914 0 0013.982.819c-.554-4.761-3.24-9.214-7.692-11.725z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M55.4 79.4c-2.6-4.4-7-7.1-11.7-7.7-1.9 4.4-1.7 9.5.8 14 2.6 4.4 7 7.1 11.7 7.7 1.9-4.4 1.8-9.6-.8-14z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M39.977 78.161a15.914 15.914 0 00-6.283-12.518c-3.845 2.86-6.222 7.377-6.307 12.524a15.914 15.914 0 006.282 12.519c3.846-2.861 6.36-7.414 6.308-12.525z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M27.239 69.377a15.914 15.914 0 00.818-13.983c-4.76.555-9.077 3.278-11.724 7.693a15.914 15.914 0 00-.819 13.982c4.761-.554 9.214-3.24 11.725-7.692z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M20.6 55.4c4.4-2.6 7.1-7 7.7-11.7-4.4-1.9-9.5-1.7-14 .8-4.4 2.6-7.1 7-7.7 11.7 4.4 1.9 9.6 1.8 14-.8z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M21.839 39.977a15.914 15.914 0 0012.518-6.283c-2.86-3.845-7.377-6.222-12.524-6.307a15.914 15.914 0 00-12.519 6.282c2.861 3.846 7.414 6.36 12.525 6.308z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
				<path d="M30.623 27.239a15.914 15.914 0 0013.983.818c-.555-4.76-3.278-9.077-7.693-11.724a15.914 15.914 0 00-13.982-.819c.554 4.761 3.24 9.214 7.692 11.725z">
					<animate
						attributeName="fill"
						begin="0s"
						dur="1s"
						keyTimes="0;0.33;0.66;1"
						repeatCount="indefinite"
						values="#000000;#000000;#000000;#000000"
					></animate>
				</path>
			</g>
		</svg>
	);
}
