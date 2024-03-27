import styled from 'styled-components';
const Wrapper = styled.article`
  padding: 2rem;
  background-color: var(--white);
  border-radius: var(--borderRadius);
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .icon {
    width: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--borderRadius);
    color: ${(props) => props.color};
    background-color: ${(props) => props.bcg};
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
  iconBackGroundColor,
}) {
  return (
    <Wrapper color={color} bcg={iconBackGroundColor}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="description">{description}</h5>
    </Wrapper>
  );
}
