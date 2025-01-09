'use client';

import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { Feature } from './types';
import { getIcon } from './utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  feature: Feature;
  variant?: 'default' | 'expert';
}

export function FeatureCard({ feature, variant = 'default' }: FeatureCardProps) {
  if (variant === 'expert') {
    return (
      <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 p-2 rounded-lg bg-gray-700">
            {getIcon(feature.icon, "w-5 h-5 text-blue-200")}
          </div>
          <div>
            <h5 className="font-medium text-white">{feature.title}</h5>
            <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.li className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
      <div className="flex-shrink-0 p-2 rounded-lg bg-gray-700">
        {getIcon(feature.icon, "w-5 h-5 text-blue-200")}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-white">
            {feature.title}
          </h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent 
                side="bottom"
                className="max-w-xs bg-white border border-gray-200 text-gray-900 p-4 rounded-lg shadow-xl"
              >
                <p className="text-sm">{feature.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.li>
  );
} 