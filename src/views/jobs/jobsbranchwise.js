import React from 'react'
import {Container, Card, Table} from 'react-bootstrap'

// job details according to branchwise 
function jobsbranchwise() {
    return (
        <>
        <Container className="table-container">
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header className="text-left">
                  <Card.Title as="h4">CSE</Card.Title>
                </Card.Header>
                <Card.Body className=" table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">ECE</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">EE</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">ME</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">MME</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">CE</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">PIE</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Apply Before</th>
                        <th className="border-0">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Microsoft</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Goldman Sachs</td>
                        <td>Job</td>
                        <td>08 March 2021 - 12:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>3</td>
                        <td>Intuit Inc.</td>
                        <td>Job</td>
                        <td>06 February 2021 - 20:00</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>4</td>
                        <td>Philips</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 17:00</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>5</td>
                        <td>D.E. Shaw</td>
                        <td>Internship</td>
                        <td>08 February 2021 - 22:00</td>
                        <td>[PDF]</td>
                        </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
        </Container>
      </>
    )
}

export default jobsbranchwise
