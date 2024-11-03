
import { FaChartLine, FaRocket, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SampleStrategiesSection = () => {
  return (
    <section className="bg-white text-black p-8 md:p-16 lg:p-24" id="strategies">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Proven <span className="text-blue-500">SEO Strategies</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          We specialize in building SEO strategies that drive results and help businesses climb the search rankings with ease.
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Strategy Card 1 */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaSearch className="text-4xl text-blue-500 mx-auto" />
          <h3 className="mt-4 text-2xl font-semibold">Keyword Research</h3>
          <p className="mt-2 text-gray-600">
            Targeting the right keywords to ensure your content ranks and brings in relevant traffic.
          </p>
        </motion.div>

        {/* Strategy Card 2 */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="text-4xl text-blue-500 mx-auto" />
          <h3 className="mt-4 text-2xl font-semibold">Content Optimization</h3>
          <p className="mt-2 text-gray-600">
            Crafting high-quality content with optimized structure for better rankings.
          </p>
        </motion.div>

        {/* Strategy Card 3 */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaRocket className="text-4xl text-blue-500 mx-auto" />
          <h3 className="mt-4 text-2xl font-semibold">Link Building</h3>
          <p className="mt-2 text-gray-600">
            Establishing authority through strategic partnerships and backlinking techniques.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SampleStrategiesSection;
