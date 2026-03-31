import { useWindowDimensions } from 'react-native';

// Base design dimensions (standard iPhone 11 / Pixel 4 viewport)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

/**
 * useResponsive()
 *
 * Returns scaling helpers that adapt sizes to the current screen dimensions.
 *
 * Usage:
 *   const { rs, rvs, rms, isTablet, width, height } = useResponsive();
 *   <View style={{ padding: rs(16), height: rvs(200) }} />
 */
export const useResponsive = () => {
    const { width, height } = useWindowDimensions();

    const widthRatio = width / BASE_WIDTH;
    const heightRatio = height / BASE_HEIGHT;

    /**
     * rs — Responsive Scale (horizontal / width-based)
     * Use for widths, paddings, margins, font sizes.
     */
    const rs = (size) => Math.round(size * widthRatio);

    /**
     * rvs — Responsive Vertical Scale (height-based)
     * Use for heights, top/bottom spacing.
     */
    const rvs = (size) => Math.round(size * heightRatio);

    /**
     * rms — Responsive Moderate Scale
     * A balanced scale; `factor` (0–1) controls sensitivity.
     * Useful for font sizes so they don't grow too aggressively on tablets.
     */
    const rms = (size, factor = 0.5) =>
        Math.round(size + (rs(size) - size) * factor);

    /** True when the device is wider than 600px (tablet/landscape) */
    const isTablet = width >= 600;

    return { rs, rvs, rms, isTablet, width, height };
};
