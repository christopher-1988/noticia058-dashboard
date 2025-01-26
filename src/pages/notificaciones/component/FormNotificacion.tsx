import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Offcanvas, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
//Service
import { postNotification } from "@src/services/notification.service";
//Component
import { FormCreate } from "../models/notification.model";
//Model
import { ResponseNotificacion } from "@models/response.model";
//Hook
import { useFechingNotification } from "../hook/useNotification";
//Context
import useAuth from "@src/@core/hooks/useAuth";

interface Props {
  state: boolean;
  handleToggle: (params: boolean) => void;
}

const FormNotificacion: React.FC<Props> = ({ state, handleToggle }) => {
  const { session } = useAuth();
  //Solicitud
  const { invalidateNotification } = useFechingNotification();
  //Solicitud
  const mutation = useMutation({
    mutationFn: postNotification,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCreate>();

  const handleCloseAndReset = () => {
    handleToggle(false);
    reset();
  };

  const onSubmit = (value: FormCreate) => {
    const form: any = new FormData();
    form.append("op", "create");
    form.append("idCreador", session?.id ?? 0);
    form.append("titulo", value.title);
    form.append("descripcion", value.title);
    mutation.mutate(form, {
      onSuccess: (rsp) => {
        const { data, status } = rsp;
        if (status >= 200 && status < 300) {
          const { responseCode, message }: ResponseNotificacion = data;
          if (responseCode === 1) {
            toast.success(message);
            invalidateNotification();
          } else if (responseCode === 2) {
            toast.error(message);
          }
          setTimeout(() => {
            handleCloseAndReset();
          }, 2000);
        } else {
          toast.error("Error en el servidor.");
          handleCloseAndReset();
        }
      },
      onError: () => {
        toast.error("Error en el servidor.");
        handleCloseAndReset();
      },
    });
  };

  return (
    <>
      <Offcanvas show={state} onHide={handleCloseAndReset} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <h2>Enviar notificación</h2>{" "}
          </Offcanvas.Title>
          <div className="btn-close" onClick={handleCloseAndReset}>
            <FontAwesomeIcon icon={faClose} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="position-relative h-100"
          >
            <Form.Group className="mb-1" controlId="name">
              <Form.Label>Titutlo</Form.Label>
              <Form.Control
                isInvalid={errors.title ? true : false}
                type="text"
                placeholder="Agregue titulo..."
                {...register("title", { required: true, maxLength: 100 })}
              />
              {errors.title && (
                <Form.Text className="text-danger">
                  Este campo es requerido
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1" controlId="name">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                isInvalid={errors.description ? true : false}
                as="textarea"
                rows={3}
                placeholder="Agregue descripción..."
                {...register("description", { required: true, maxLength: 100 })}
              />
              {errors.description && (
                <Form.Text className="text-danger">
                  Este campo es requerido
                </Form.Text>
              )}
            </Form.Group>

            {/* cancelar y agregar buttons  row */}
            <div
              className="d-flex justify-content-end gap-10"
              style={{ position: "absolute", bottom: "30px", width: "100%" }}
            >
              <Button
                variant="secondary"
                className="border-0 me-1"
                onClick={handleCloseAndReset}
              >
                <span className="text-dark">Cancelar</span>
              </Button>
              <Button variant="primary" type="submit">
                {mutation.isPending && (
                  <Spinner color="light" size="sm"></Spinner>
                )}
                <span className="align-middle ms-25">Enviar</span>
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormNotificacion;
