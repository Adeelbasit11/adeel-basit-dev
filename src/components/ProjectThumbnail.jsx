import { useState } from 'react';
import { FiLock } from 'react-icons/fi';

const initials = (title) =>
  title
    .replace(/[^a-zA-Z\s]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

/**
 * Professional, uniform project thumbnail: the screenshot is shown inside a
 * browser-window mockup on a backdrop tinted with the project's brand colour.
 * If there is no image (or it fails to load) a branded placeholder is drawn.
 */
export default function ProjectThumbnail({ title, image, domain, accent = '#00eeff', category }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;

  return (
    <div className="thumb" style={{ '--brand': accent }}>
      <div className="thumb-window">
        <div className="thumb-bar">
          <span className="thumb-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="thumb-url">
            <FiLock aria-hidden="true" />
            <span>{domain || title.toLowerCase()}</span>
          </span>
        </div>
        <div className="thumb-screen">
          {showImage ? (
            <img src={image} alt={`${title} website preview`} loading="lazy" onError={() => setFailed(true)} />
          ) : (
            <div className="thumb-placeholder" aria-label={`${title} preview`} role="img">
              <span className="thumb-initials">{initials(title)}</span>
              <span className="thumb-title">{title}</span>
              <span className="thumb-sub">{category === 'webapp' ? 'Web Application' : 'Website'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
