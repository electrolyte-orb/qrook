import { HTMLAttributes } from 'react';

export default function GooeyLoader(props: HTMLAttributes<HTMLOrSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				margin: 'auto',
				background: '0 0',
				display: 'block',
			}}
			width={200}
			height={200}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			{...props}
		>
			<defs>
				<filter
					id="a"
					x="-100%"
					y="-100%"
					width="300%"
					height="300%"
					colorInterpolationFilters="sRGB"
				>
					<feGaussianBlur in="SourceGraphic" stdDeviation={4.8} />
					<feComponentTransfer result="cutoff">
						<feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1" />
					</feComponentTransfer>
				</filter>
			</defs>
			<g filter="url(#a)" transform="translate(50 50)">
				<g>
					<circle cx={20} r={5} fill="#3b82f6">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="10s"
							repeatCount="indefinite"
							begin="-0.09999999999999999s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="10s"
						repeatCount="indefinite"
						begin="0s"
					/>
				</g>
				<g>
					<circle cx={20} r={5} fill="#d946ef">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="5s"
							repeatCount="indefinite"
							begin="-0.08333333333333333s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="5s"
						repeatCount="indefinite"
						begin="-0.016666666666666666s"
					/>
				</g>
				<g>
					<circle cx={20} r={5} fill="#f43f5e">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="3.3333333333333335s"
							repeatCount="indefinite"
							begin="-0.06666666666666667s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="3.3333333333333335s"
						repeatCount="indefinite"
						begin="-0.03333333333333333s"
					/>
				</g>
				<g>
					<circle cx={20} r={5} fill="#3b82f6">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="2.5s"
							repeatCount="indefinite"
							begin="-0.049999999999999996s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="2.5s"
						repeatCount="indefinite"
						begin="-0.049999999999999996s"
					/>
				</g>
				<g>
					<circle cx={20} r={5} fill="#d946ef">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="2.0000000000000004s"
							repeatCount="indefinite"
							begin="-0.03333333333333333s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="2.0000000000000004s"
						repeatCount="indefinite"
						begin="-0.06666666666666667s"
					/>
				</g>
				<g>
					<circle cx={20} r={5} fill="#f43f5e">
						<animate
							attributeName="r"
							keyTimes="0;0.5;1"
							values="7.199999999999999;16.799999999999997;7.199999999999999"
							dur="1.6666666666666667s"
							repeatCount="indefinite"
							begin="-0.016666666666666666s"
						/>
					</circle>
					<animateTransform
						attributeName="transform"
						type="rotate"
						keyTimes="0;1"
						values="0;360"
						dur="1.6666666666666667s"
						repeatCount="indefinite"
						begin="-0.08333333333333333s"
					/>
				</g>
			</g>
		</svg>
	);
}
