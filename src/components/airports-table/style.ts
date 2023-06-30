import styled from 'styled-components'

export const Component = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Table = styled.table`
  width: 100%;
  padding: 1rem;

  th {
    text-align: left;
    padding: 1rem 0;
    border-bottom: 1px solid #ccc;
  }

  td {
    padding: 1rem 0;
  }

  tr:not(:last-child) td {
    border-bottom: 1px solid #ccc;
  }
`
