'use client';

import { motion } from "framer-motion";
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { commonFeatures } from "./features";
import { getIcon } from "./utils";

export function CommonFeaturesList() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {commonFeatures.map((feature, index) => (
        <motion.div
          key={index}
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
            {getIcon(feature.icon, "w-4 h-4 text-blue-200")}
            <span>{feature.title}</span>
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
        </motion.div>
      ))}
    </div>
  );
} 