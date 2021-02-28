import React from 'react'
import {Container, Card, Table} from 'react-bootstrap';

//list of students applied for a job (branchwise)
function appliedbranchwise() {
    return (
        <>
        <Container className="table-container">
              <Card className="strpied-tabled-with-hover m-2">
                <Card.Header>
                  <Card.Title as="h4">CSE</Card.Title>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGCSxxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGCSxxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGCSxxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGCSxxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGCSxxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGECxxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGECxxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGECxxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGECxxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGECxxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGEExxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGEExxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGEExxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGEExxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGEExxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGMExxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGMExxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGMExxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGMExxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGMExxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGMMxxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGMMxxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGMMxxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGMMxxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGMMxxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGCExxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGCExxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGCExxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGCExxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGCExxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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
                  <thead className="text-center">
                      <tr>
                        <th className="border-0">Registration No.</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Type</th>
                        <th className="border-0">Company</th>
                        <th className="border-0">CV</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td>2019UGPIxxx</td>
                        <td>ABC</td>
                        <td>Internship</td>
                        <td>Microsoft</td>
                        <td>[PDF]</td>
                      </tr>
                      <tr>
                        <td>2019UGPIxxx</td>
                        <td>XYZ</td>
                        <td>Job</td>
                        <td>Goldman Sachs</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGPIxxx</td>
                        <td>PQR</td>
                        <td>Job</td>
                        <td>Intuit Inc.</td>
                        <td>[PDF]</td>
                        </tr>
                      <tr>
                        <td>2019UGPIxxx</td>
                        <td>LKM</td>
                        <td>Internship</td>
                        <td>Philips</td>
                        <td>[PDF]</td>
                         </tr>
                      <tr>
                        <td>2019UGPIxxx</td>
                        <td>RST</td>
                        <td>Internship</td>
                        <td>D.E. Shaw</td>
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

export default appliedbranchwise
