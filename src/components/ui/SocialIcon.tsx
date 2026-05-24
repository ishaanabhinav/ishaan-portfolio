import { Github, Linkedin, Mail } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import type { SocialPlatform } from '@/types';

const ICONS: Record<SocialPlatform, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

interface Props {
  platform: SocialPlatform;
  className?: string;
  'aria-hidden'?: boolean;
}

export const SocialIcon = ({ platform, className, ...rest }: Props) => {
  const Icon = ICONS[platform];
  return <Icon className={className} {...rest} />;
};
