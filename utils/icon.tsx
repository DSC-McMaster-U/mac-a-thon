import * as Icons from "react-icons/si";

interface ReactIconFromTextProps {
	icon: string;
	className?: string;
}

export const SiIconFromName: React.FC<ReactIconFromTextProps> = ({
	icon,
	className = "",
}) => {
	const IconComponent = Icons[icon as keyof typeof Icons];

	if (!IconComponent) {
		console.warn(`Icon "${icon}" not found`);
		return null;
	}

	return <IconComponent className={className} />;
};
