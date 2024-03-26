import styled from 'styled-components';
const Wrapper = styled.article`
  padding: 2rem;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
  }
  .icon {
    width: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borderRadius);
  }
  .icon svg {
    font-size: 2rem;
  }
  .description {
    margin: 0.5rem 0px 0px;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
  }
`;

export default function StatCard({
  icon,
  count,
  description,
  color,
  background,
}) {
  return (
    <Wrapper style={{ borderBottom: `5px solid ${color}` }}>
      <header>
        <span style={{ color: color }} className="count">
          {count}
        </span>
        <span
          style={{ color: color, backgroundColor: background }}
          className="icon"
        >
          {icon}
        </span>
      </header>
      <h5 className="description">{description}</h5>
    </Wrapper>
  );
}
