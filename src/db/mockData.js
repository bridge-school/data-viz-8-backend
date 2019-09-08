const mockData = {
    __collection__: {
      cohorts: {
        __doc__: {

          cohort_a: {
            type: "front end",

            __collection__: {
                applicants: {
                  __doc__: {

                    applicant_a: {
                      reference: '__ref__:cohorts/applicant_a'
                    }
                  }
                }
              }
        
          },

          cohort_b: {
            type: "front end",

            __collection__: {
                applicants: {
                  __doc__: {

                    applicant_b: {
                      reference: '__ref__:cohorts/applicant_b'
                    }
                  }
                }
              }
        
          },

          cohort_c: {
            type: "design",

            __collection__: {
                applicants: {
                  __doc__: {

                    applicant_c: {
                      reference: '__ref__:cohorts/applicant_c'
                    }
                  }
                }
              }
        
          }
   

        }
      }
    }
  }